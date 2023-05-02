import PropTypes from "prop-types";
import css from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
    
            {title && (<h2 className={css.title}>{title}</h2>
            )}

            <ul className={css.statList}>
  
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
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
};

export default Statistics;