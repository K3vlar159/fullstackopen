const Filter = (props) => {
    return (
        <div>
          filter: <input value = {props.filter} onChange = {props.handleFilterChange} />
        </div>
    )
}

export default Filter