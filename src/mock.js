const Mock = require('mockjs')
Mock.mock('http://localhost:8848/treeData', 'get', {
  result: true,
  code: 'OK',
  message: 'success',
  data: {
    page: 1,
    total_page: 1,
    count: 1,
    next: null,
    previous: null,
    data_list: [
      {
        id: 1,
        name: '总公司',
        parent_id: null,
        parent_name: null,
        has_children: true,
        children: [
          {
            id: 2,
            name: '技术事业群',
            parent_id: 1,
            parent_name: '总公司',
            has_children: true,
            children: [
              {
                id: 12,
                name: '管理线',
                parent_id: 2,
                parent_name: '技术事业群',
                has_children: false,
                children: []
              },
              {
                id: 13,
                name: '平台技术中心',
                parent_id: 2,
                parent_name: '技术事业群',
                has_children: true,
                children: [
                  {
                    id: 19,
                    name: '平台开发部',
                    parent_id: 13,
                    parent_name: '平台技术中心',
                    has_children: false,
                    children: []
                  },
                  {
                    id: 20,
                    name: '应用开发部',
                    parent_id: 13,
                    parent_name: '平台技术中心',
                    has_children: false,
                    children: []
                  },
                  {
                    id: 21,
                    name: '应用管理部',
                    parent_id: 13,
                    parent_name: '平台技术中心',
                    has_children: false,
                    children: []
                  },
                  {
                    id: 22,
                    name: '数据平台部',
                    parent_id: 13,
                    parent_name: '平台技术中心',
                    has_children: false,
                    children: []
                  },
                  {
                    id: 23,
                    name: '央视新闻项目组',
                    parent_id: 13,
                    parent_name: '平台技术中心',
                    has_children: false,
                    children: []
                  },
                  {
                    id: 24,
                    name: '管理线',
                    parent_id: 13,
                    parent_name: '平台技术中心',
                    has_children: false,
                    children: []
                  }
                ]
              },
              {
                id: 14,
                name: '技术运维中心',
                parent_id: 2,
                parent_name: '技术事业群',
                has_children: true,
                children: [
                  {
                    id: 25,
                    name: '系统运维部',
                    parent_id: 14,
                    parent_name: '技术运维中心',
                    has_children: false,
                    children: []
                  },
                  {
                    id: 26,
                    name: '平台运维部',
                    parent_id: 14,
                    parent_name: '技术运维中心',
                    has_children: false,
                    children: []
                  },
                  {
                    id: 27,
                    name: '网络安全部',
                    parent_id: 14,
                    parent_name: '技术运维中心',
                    has_children: false,
                    children: []
                  },
                  {
                    id: 28,
                    name: '基础设施部',
                    parent_id: 14,
                    parent_name: '技术运维中心',
                    has_children: false,
                    children: []
                  },
                  {
                    id: 29,
                    name: '管理线',
                    parent_id: 14,
                    parent_name: '技术运维中心',
                    has_children: false,
                    children: []
                  }
                ]
              },
              {
                id: 15,
                name: '技术管理办公室',
                parent_id: 2,
                parent_name: '技术事业群',
                has_children: false,
                children: []
              },
              {
                id: 16,
                name: '视频技术中心',
                parent_id: 2,
                parent_name: '技术事业群',
                has_children: false,
                children: []
              },
              {
                id: 17,
                name: '用户数据运营中心',
                parent_id: 2,
                parent_name: '技术事业群',
                has_children: false,
                children: []
              },
              {
                id: 18,
                name: '多媒体制作部',
                parent_id: 2,
                parent_name: '技术事业群',
                has_children: false,
                children: []
              }
            ]
          },
          {
            id: 3,
            name: '合作单位',
            parent_id: 1,
            parent_name: '总公司',
            has_children: false,
            children: []
          },
          {
            id: 4,
            name: '新媒体创新孵化中心',
            parent_id: 1,
            parent_name: '总公司',
            has_children: false,
            children: []
          },
          {
            id: 5,
            name: '易橙天下',
            parent_id: 1,
            parent_name: '总公司',
            has_children: false,
            children: []
          },
          {
            id: 6,
            name: '项目办公室',
            parent_id: 1,
            parent_name: '总公司',
            has_children: false,
            children: []
          },
          {
            id: 7,
            name: '品牌部',
            parent_id: 1,
            parent_name: '总公司',
            has_children: false,
            children: []
          },
          {
            id: 8,
            name: '央视影音事业群',
            parent_id: 1,
            parent_name: '总公司',
            has_children: false,
            children: []
          },
          {
            id: 9,
            name: '分子公司',
            parent_id: 1,
            parent_name: '总公司',
            has_children: false,
            children: []
          },
          {
            id: 10,
            name: '总编室',
            parent_id: 1,
            parent_name: '总公司',
            has_children: false,
            children: []
          },
          {
            id: 11,
            name: '海洋经济办公室',
            parent_id: 1,
            parent_name: '总公司',
            has_children: false,
            children: []
          }
        ]
      }
    ]
  }
})
