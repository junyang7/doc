<?php


namespace App\Models;


use PF\Cores\Model;


class ModelUser extends Model
{


    private static $instance = NULL;
    
    
    public function __construct()
    {
    
        parent::__construct('user');
        
    }
    
    
    public static function getInstance()
    {
    
        if(!isset(self::$instance))
        {
            self::$instance = new self();
        }
        return self::$instance;
        
    }
    
    
}
