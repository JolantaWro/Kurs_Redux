import {addArticle} from "../redux/actions";
import {connect} from "react-redux";
import Articles from "../components/Articles";

const mapStateToProps = (state) => ({
    articles: state.articles,
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    onAdd: (article) => dispatch(addArticle(article))
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
