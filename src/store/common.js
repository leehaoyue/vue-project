import $lodash from 'lodash';

const dataDeal = ({state, childkey, matchkey, keymap}) => {
  let arr = $lodash.cloneDeep(state),
    dataMap = ({list, map, key}) => {
      return list.map(item => {
        let obj = {};

        if (matchkey && matchkey[key]) {
          $lodash.assign(item, matchkey[key](item));
        }
        for (let i in map) {
          obj[map[i]] = item[i];
        }
        $lodash.assign(item, obj);
        return item;
      });
    },
    recursiveFC = ({list, count}) => {
      let num = count;

      if (Array.isArray(list)) {
        num+=1;
        for (let i=0; i<list.length; i++) {
          recursiveFC({
            list: list[i],
            childkey: childkey,
            key: childkey[num],
            count: num
          });
        }
        return dataMap({
          list: list,
          map: keymap[num-1]
        });
      }
      if (list[childkey[num]]) {
        list[childkey[0]] = recursiveFC({
          list: list[childkey[num]],
          childkey: childkey,
          count: num
        });
        return dataMap({
          list: list[childkey[0]],
          key: childkey[num],
          map: keymap[num]
        });
      }
    },
    node = recursiveFC({
      list: arr,
      count: 0
    });

  return node;
};

export default {
  namespaced: true,
  state: {
    line: [], // 线路
    organ: [], // 机构
    depart: [], // 机构
    post: [], // 岗位
    cardType: [], // 卡片类型
    manStructure: [], // 组织人员结构
    entrance: [], // 门禁结构（二级列表）
    entranceList: [], // 门禁结构（二级列表）
    orgStructure: [] // 组织机构结构
  },
  getters: {
    lineDeal: state => { // 线路（处理后的数据）
      let arr = [];

      state.line.forEach(item => {
        arr.push({
          label: item.name,
          value: item.id
        });
      });
      return arr;
    },
    organDeal: state => { // 机构（处理后的数据）
      let arr = [];

      state.organ.forEach(item => {
        arr.push({
          label: item.name,
          value: item.id
        });
      });
      return arr;
    },
    departDeal: state => { // 机构（处理后的数据）
      let arr = [];

      state.depart.forEach(item => {
        arr.push({...item,
          label: item.dept_name,
          value: item.dept_code
        });
      });
      return arr;
    },
    postDeal: state => { // 岗位（处理后的数据）
      let arr = [];

      state.post.forEach(item => {
        arr.push({
          label: item.name,
          value: item.id
        });
      });
      return arr;
    },
    cardTypeDeal: state => { // 卡片类型（处理后的数据）
      let arr = [];

      state.cardType.forEach(item => {
        arr.push({
          label: item.name,
          value: item.id
        });
      });
      return arr;
    },
    manStructureDeal: state => { // 组织人员结构（处理后的数据）
      return dataDeal({
        state: state.manStructure,
        childkey: ['children', 'post_list', 'user_list'],
        keymap: [{ 'route_no': 'value', 'route_name': 'label' }, { 'post_code': 'value', 'post_name': 'label' }, { 'staff_code': 'value', 'staff_name': 'label' }]
      });
    },
    entranceDeal: state => { // 门禁结构（二级列表）（处理后的数据）
      return dataDeal({
        state: state.entrance,
        childkey: ['children', 'group_list'],
        matchkey: {
          'group_list': item => {
            return {
              'group_name': `${item.group_name}（${item.group_num}个门）`
            };
          }
        },
        keymap: [{ 'route_no': 'value', 'route_name': 'label' }, { 'group_no': 'value', 'group_name': 'label' }]
      });
    },
    entranceListDeal: state => { // 门禁结构（三级列表）（处理后的数据）
      return dataDeal({
        state: state.entranceList,
        childkey: ['children', 'group_category', 'group_list'],
        matchkey: {
          'group_list': item => {
            return {
              'group_name': `${item.group_name}（${item.group_num}个门）`
            };
          }
        },
        keymap: [{ 'route_no': 'value', 'route_name': 'label' }, { 'category_id': 'value', 'category_name': 'label' }, { 'group_no': 'value', 'group_name': 'label' }]
      });
    },
    orgStructureDeal: state => { // 组织机构结构（处理后的数据）
      return dataDeal({
        state: state.orgStructure,
        childkey: ['children', 'post_list'],
        keymap: [{ 'route_no': 'value', 'route_name': 'label' }, { 'post_code': 'value', 'post_name': 'label' }]
      });
    }
  },
  mutations: {
    line(state, arr) {
      state.line = arr;
    },
    organ(state, arr) {
      state.organ = arr;
    },
    depart(state, arr) {
      state.depart = arr;
    },
    post(state, arr) {
      state.post = arr;
    },
    cardType(state, arr) {
      state.cardType = arr;
    },
    manStructure(state, arr) {
      state.manStructure = arr;
    },
    entrance(state, arr) {
      state.entrance = arr;
    },
    entranceList(state, arr) {
      state.entranceList = arr;
    },
    orgStructure(state, arr) {
      state.orgStructure = arr;
    }
  }
};
