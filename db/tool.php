<?php


$database_list = [
    // 来源
    'source' => [
        'host' => '127.0.0.1',
        'port' => '3306',
        'database' => 'test1',
        'username' => 'root',
        'password' => 'root',
        'charset' => 'utf8mb4',
        'collation' => 'utf8mb4_general_ci',
    ],
    // 目标
    'target' => [
        'host' => '127.0.0.1',
        'port' => '3306',
        'database' => 'test2',
        'username' => 'root',
        'password' => 'root',
        'charset' => 'utf8mb4',
        'collation' => 'utf8mb4_general_ci',
    ],
];

$connection_list = [];
foreach($database_list as $name => $conf_list)
{
    $connection_list[$name] = new PDO(
        sprintf('mysql:host=%s;port=%s;dbname=%s', $conf_list['host'], $conf_list['port'], $conf_list['database']),
        $conf_list['username'],
        $conf_list['password'],
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::MYSQL_ATTR_INIT_COMMAND => sprintf('SET NAMES %s', $conf_list['charset']),
            PDO::ATTR_EMULATE_PREPARES => TRUE,
            PDO::ATTR_PERSISTENT => TRUE,
        ]
    );
}
$data = [];
foreach($connection_list as $name => $pdo)
{
    $statement = $pdo->prepare('show tables');
    $statement->execute();
    $table_list = $statement->fetchAll(PDO::FETCH_NUM);
    foreach($table_list as $table)
    {
        $statement = $pdo->prepare('show create table ' . $table[0]);
        $statement->execute();
        $data[$name][$table[0]]['ddl'] = $statement->fetch(PDO::FETCH_NUM)[1];
        $line_list = explode("\n", $data[$name][$table[0]]['ddl']);
        $data[$name][$table[0]]['opt'] = trim(array_pop($line_list), ' (),;');
        array_shift($line_list);
        foreach($line_list as $line)
        {
            if(preg_match('/^`(\w+)`\s(.+)$/', trim($line, ' ,'), $match) == 1)
            {
                $data[$name][$table[0]]['column_list'][$match[1]] = $match[2];
            }
            else
            {
                $data[$name][$table[0]]['index_list'][] = trim($line, ' ,');
            }
        }
    }
}


// 对比两个库的表
$table_list_source = array_keys($data['source']);
$table_list_target = array_keys($data['target']);



$res = [];

// 表
// 创建：source有target无
foreach(array_diff($table_list_source, $table_list_target) as $table)
{
    echo 'ADD:' . "\t" . json_encode($data['source'][$table]['ddl'], JSON_UNESCAPED_UNICODE) . PHP_EOL;
    unset($data['source'][$table]);
}
// 删除：source无target有
foreach(array_diff($table_list_target, $table_list_source) as $table)
{
    echo 'DEL:' . "\t" . json_encode('DROP TABLE `' . $table . '`', JSON_UNESCAPED_UNICODE) . PHP_EOL;
    unset($data['target'][$table]);
}


foreach($data['source'] as $name => $info)
{

    // 字段
    // 新建：source有target无
    foreach(array_diff(array_keys($data['source'][$name]['column_list']), array_keys($data['target'][$name]['column_list'])) as $column)
    {
        echo 'ADD:' . "\t" . json_encode( 'ALTER TABLE ' . $name . ' ADD COLUMN ' . $column . ' ' . $data['source'][$name]['column_list'][$column], JSON_UNESCAPED_UNICODE) . PHP_EOL;
        unset($data['source'][$name]['column_list'][$column]);
    }
    // 删除：source有target无
    foreach(array_diff(array_keys($data['target'][$name]['column_list']), array_keys($data['source'][$name]['column_list'])) as $column)
    {
        echo 'DEL:' . "\t" . json_encode( 'ALTER TABLE ' . $name . ' DROP COLUMN ' . $column, JSON_UNESCAPED_UNICODE) . PHP_EOL;
        unset($data['target'][$name]['column_list'][$column]);
    }
    // 修改：source与target不一致
    foreach(array_keys($data['source'][$name]['column_list']) as $column)
    {
        if($data['source'][$name]['column_list'][$column] != $data['target'][$name]['column_list'][$column])
        {
            echo 'MOD:' . "\t" . json_encode( 'ALTER TABLE ' . $name . ' MODIFY COLUMN ' . $column . ' ' . $data['source'][$name]['column_list'][$column], JSON_UNESCAPED_UNICODE) . PHP_EOL;
        }
    }

    // 索引
    var_dump($data['source'][$name]['index_list']);
    // 创建
    // 删除
    // 修改-》（先删除，再创建）

}

// 创建
// 删除
// 修改









