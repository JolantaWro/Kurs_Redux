import store from "../redux/store";
import {ADD_PRODUCT, addProduct} from "../redux/actions";

class ShoppingList {
  constructor(rootElement) {
    this.createUI(rootElement);
    this.reduxConnect();
    this.collectRefs();
    this.applyHandlers();
  }

  createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = `
      <div class="card-header">Lista zakupów</div>
      <div class="card-body">
        <form>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Produkt..." />
            <div class="input-group-append">
              <button class="btn btn-outline-primary" type="submit" id="shop-add">Dodaj</button>
            </div>
          </div>
        </form>
        <ul class="list-group mt-3" id="shop-list">
        </ul>
      </div>
    `;
  }

  collectRefs() {
    this.form = this.rootElement.querySelector("form");
    this.inputValue = this.rootElement.querySelector(".form-control");
    this.shopList = this.rootElement.querySelector("#shop-list");
  }

  reduxConnect() {
    store.subscribe(() => {
      this.createLi()
    })
    store.subscribe(() => console.log(store.getState().products))

  }

  createLi() {
    const elementLi = document.createElement("Li")
    elementLi.classList = "list-group-item d-flex justify-content-between align-items-center"
    store.getState().products.forEach(el => elementLi.innerText = el)
    // elementLi.innerText = store.getState().products.forEach(el => el)
    this.shopList.appendChild(elementLi)
  }

  applyHandlers() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if(this.inputValue.value) {
        store.dispatch(addProduct(this.inputValue.value));
        this.inputValue.value = "";
      }
    })
  }
}

export default ShoppingList;
