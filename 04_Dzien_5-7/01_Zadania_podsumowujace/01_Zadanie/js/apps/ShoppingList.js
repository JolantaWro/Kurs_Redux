import store from "../redux/store";
import {ADD_PRODUCT, addProduct, changeOrder} from "../redux/actions";

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
    store.subscribe(() => console.log(store.getState().products.productsList.sort((a,b) => b.id - a.id)))
    store.getState().products.productsList.sort((a,b) => b.id - a.id)

  }

  createLi() {
    const elementDiv = document.createElement("div")
    const elementLi = document.createElement("Li")
    elementLi.classList = "list-group-item d-flex justify-content-between align-items-center"

    store.getState().products.productsList.forEach(el => {
      elementLi.innerText = el.text
      this.elementButtonUp = document.createElement("button");
      this.elementButtonUp.innerText = "UP";
      this.elementButtonUp.classList.add("upClass");
      this.elementButtonUp.value = el.id;

      this.elementButtonDown = document.createElement("button");
      this.elementButtonDown.innerText = "DOWN";
      this.elementButtonDown.classList.add("downClass");
      this.elementButtonUp.value = el.id;
    })

    elementLi.append(this.elementButtonUp, this.elementButtonDown);
    elementDiv.appendChild(elementLi)

    this.shopList.appendChild(elementDiv)
    this.elementButtonUp.addEventListener("click", (e)=> store.dispatch(changeOrder(parseInt(e.target.value))))
    this.elementButtonDown.addEventListener("click", (e)=> console.log("Down", e.target.value))

  }

  applyHandlers() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if(this.inputValue.value) {
        store.dispatch(addProduct(this.inputValue.value ))
        // store.dispatch({ type: 'ADD_PRODUCT', payload: this.inputValue.value })
        this.inputValue.value = "";
      }
    })
    // document.querySelector(".upClass").addEventListener("click", () => console.log("up"))

    // this.elementButtonUp.addEventListener("click", ()=> console.log("Up"))
  }



}

export default ShoppingList;
