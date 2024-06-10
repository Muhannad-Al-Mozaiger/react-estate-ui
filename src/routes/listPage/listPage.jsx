import Filter from '../../components/filter/filter';
import { listData } from '../../lib/dummydata';
import './listPage.scss'
import Card from '../../components/card/card';

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
      <div className="mapContainer"></div>
    </div>
  )
}

export default ListPage;