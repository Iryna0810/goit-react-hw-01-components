// import stats from "./data.json"
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
    // console.log(stats);
    return (
    <section className="statistics">
    
            {title && (<h2 className="title">{title}</h2>
            )}

  <ul className="stat-list">
  
    {stats.map((element) => (
    <li className="item" key={element.id}>
      <span className="label">{element.label}</span>
      <span className="percentage">{element.percentage}</span>
    </li>
        ))
            }
   </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

export default Statistics;