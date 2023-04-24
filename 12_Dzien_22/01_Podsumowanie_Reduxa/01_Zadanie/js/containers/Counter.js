import { connect } from "react-redux";
import { Counter } from "../components/Counter";
import { startCounter, stopCounter } from "../redux/actions";

// const { number } = useParams();
//
// useEffect(() => {
//     updateStartingValue(parseInt(number, 10))
// }, [number]);


const mapStateToProps = (state) => ({
    value: state.counter.value,
    isCounting: state.counter.isCounting,
});

const mapDispatchToProps = (dispatch) => ({
    startCounter: () => dispatch(startCounter()),
    stopCounter: () => dispatch(stopCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
