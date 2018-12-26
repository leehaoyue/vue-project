export default {
  name: 'subway',
  data() {
    return {
      cityName: '北京'
    }
  },
  mounted() {
    let subwayCityName = this.cityName;
    let list = BMapSub.SubwayCitiesList;
    let subwaycity = null;
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === subwayCityName) {
            subwaycity = list[i];
            break;
        }
    }
    let subway = new BMapSub.Subway('map_container', subwaycity.citycode);
    let zoomControl  = new BMapSub.ZoomControl({
        anchor: BMAPSUB_ANCHOR_BOTTOM_RIGHT,
        offset: new BMapSub.Size(10,100)
    });
    subway.addControl(zoomControl);
    subway.addEventListener('tap', (e) => {
      let detail = new BMapSub.DetailInfo(subway);
      detail.search(e.station.name);
    });
  }
}