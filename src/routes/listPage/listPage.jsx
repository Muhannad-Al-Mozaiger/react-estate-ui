import Filter from '../../components/filter/filter';
import { listData } from '../../lib/dummydata';
import './listPage.scss'
import Card from '../../components/card/card';
import Map from '../../components/map/map';
function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map((item) => (
            <Card item={item} key={item.id}/>
          ))}
        </div>
        </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default ListPage;