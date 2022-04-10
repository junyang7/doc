<template>
  <div class="x_tree">
    <x_tree style="padding: 0;" :data="data" :deep="0"></x_tree>
  </div>
</template>

<script>
import x_tree from "./x_tree";
export default {
  name: "Index",
  components: {
    x_tree
  },
  data() {
    return {
      data: [
        {
          id: 0,
          name: 'wiki',
          pid: 0,
          ranking: 0,
          collapse: true,
          children: [
            {
              id: 1,
              name: '客户端',
              pid: 0,
              ranking: 0,
              collapse: true,
              children: [
                {
                  id: 3,
                  name: 'Android',
                  pid: 1,
                  ranking: 0,
                  collapse: true,
                  children: [
                    {
                      id: 10,
                      name: 'app',
                      pid: 3,
                      ranking: 0,
                      collapse: true,
                    },
                    {
                      id: 10,
                      name: 'h5',
                      pid: 3,
                      ranking: 0,
                      collapse: true,
                    },
                  ],
                },
                {
                  id: 4,
                  name: 'iOS',
                  pid: 1,
                  ranking: 0,
                  collapse: true,
                },
              ],
            },
            {
              id: 2,
              name: '服务端',
              pid: 0,
              ranking: 0,
              collapse: true,
              children: [
                {
                  id: 5,
                  name: 'app',
                  pid: 2,
                  ranking: 0,
                  collapse: true,
                },
                {
                  id: 6,
                  name: 'mp',
                  pid: 2,
                  ranking: 0,
                  collapse: true,
                },
                {
                  id: 7,
                  name: 'admin',
                  pid: 2,
                  ranking: 0,
                  collapse: true,
                },
                {
                  id: 8,
                  name: 'h5',
                  pid: 2,
                  ranking: 0,
                  collapse: true,
                },
                {
                  id: 9,
                  name: 'src',
                  pid: 2,
                  ranking: 0,
                  collapse: true,
                },
              ],
            },
          ],
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
