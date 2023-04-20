import React from "react";
import {connect} from "react-redux";
import FavouritesArray from "../components/Favourites";

const mapStateToProps = state => ({
    favourites: state.favourites
})
export default connect(mapStateToProps)(FavouritesArray)