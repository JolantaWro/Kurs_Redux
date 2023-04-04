import {addUser} from "../redux/actions";
import UserInput from "../components/UserInput";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    onUserAdd: (user) => dispatch(addUser(user))
})
export default connect(null, mapDispatchToProps)(UserInput);
