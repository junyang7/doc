<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app*/
/*{*/
/*  color: #515a6e;*/
/*  font-size: 14px;*/
/*  font-family: Consolas, Monaco, monospace;*/
/*}*/
/*标题*/
.marked h1, h2, h3, h4, h5, h6
{
  font-size: 100%;
  font-weight: bolder;
  color: #17233d;
}
.marked h1
{
  font-size: 2em;
  margin: .67em 0;
}
.marked h2
{
  font-size: 1.5em;
  margin: .75em 0
}
.marked h3
{
  font-size: 1.17em;
  margin: .83em 0
}
.marked h5
{
  font-size: .83em;
  margin: 1.5em 0
}
.marked h6
{
  font-size: .75em;
  margin: 1.67em 0
}
.marked hr
{
  /*height: 1px;*/
  /*background-color: #e8eaec;;*/
  border: 0;
  border-top: 1px dashed #e8eaec;
}
/*代码*/
.marked pre
{
  overflow: auto;
  color: #515a6e;
  border: 1px solid #e8eaec;
  border-radius: 2px;
  /*background-color: #f8f8f9;*/
}
.marked code
{
  font-family: Consolas, Monaco, monospace;
  font-size: 13px;
  color: #515a6e !important;
}
.marked pre > *
{
  color: #515a6e;
}
/*表格*/
.marked table
{
  border-collapse: collapse;
  border-spacing: 0;
  display: block;
  width: 100%;
  overflow: auto;
  word-break: normal;
  font-size: 13px;
}
.marked table th
{
  font-weight: bold;
}
.marked table th, .marked table td
{
  padding: 6px 13px;
  border: 1px solid #e8eaec;
}
.marked table tr
{
  background-color: #fff;
  border-top: 1px solid #e8eaec;
}
.marked table tr:nth-child(2n)
{
  background-color: #f8f8f9;
}
.marked table thead tr, .marked table thead tr
{
  background-color: #f8f8f9;
}
</style>
