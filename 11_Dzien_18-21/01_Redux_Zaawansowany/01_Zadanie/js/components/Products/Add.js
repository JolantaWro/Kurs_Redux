import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  // state = {
  //   name: "",
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveProduct(this.state.name)
    // this.setState({name: ""}) do poprawy
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };



  render() {
    return (
      <>
        <h1 className="title">Dodaj produkt</h1>
        <div className="box">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Nazwa produktu</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nazwa produktu"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Dodaj produkt</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddProduct;
