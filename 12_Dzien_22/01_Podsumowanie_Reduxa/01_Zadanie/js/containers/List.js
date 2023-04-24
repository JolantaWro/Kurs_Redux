import { connect } from "react-redux";
import { List } from "../components/List";
import { addItem, removeItem } from "../redux/actions";

const mapStateToProps = (state) => ({
    list: state.list,
});

const mapDispatchToProps = (dispatch) => ({
    save: () => dispatch(addItem()),
    remove: (idx) => dispatch(removeItem(idx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
