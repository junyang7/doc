<template>
    <div>
        <div>设计这些组件的目的有两个：</div>
        <ul>
            <li>复用</li>
            <li>标准化</li>
        </ul>
        <br/>
        <h2>复用</h2>
        <div>一次封装，永久调用。</div>
        <div>建立标准的、能够满足绝大多数业务场景的封装。使得在各个场景中的开发无需关注细节，直接调用或通过配置属性来满足各种需求。</div>
        <h2>标准化</h2>
        <div>表现一致，调用一致。</div>
        <div>对外暴露统一的封装，对所有表现做到可控。代码一致，风格一致，思路一致，开发一致，维护一致。</div>
    </div>
</template>

<script>

export default
{
    name: "v_design_test",
}
</script>

<style scoped>

</style>
