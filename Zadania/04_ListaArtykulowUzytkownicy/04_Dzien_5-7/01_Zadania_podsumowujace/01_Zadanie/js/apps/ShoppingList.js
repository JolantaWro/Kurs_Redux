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
        this.shopList.innerHTML = "";
        this.createLi()
    })
    const unsubscribe = store.subscribe(() => {
      console.log(store.getState().products.sort((a,b) => b.id - a.id));
    });


  }

  createLi() {
      store.getState().products.forEach(element => {
          let elementDiv = document.createElement("div")
          let elementLi = document.createElement("Li")
          elementLi.classList = "list-group-item d-flex justify-content-between align-items-center"
          elementLi.innerText = element
          let elementButtonUp = document.createElement("button");
          elementButtonUp.innerText = "UP";
          elementButtonUp.classList.add("UP");
          elementButtonUp.value = element;

          let elementButtonDown = document.createElement("button");
          elementButtonDown.innerText = "DOWN";
          elementButtonDown.classList.add("DOWN");
          elementButtonDown.value = element;

          elementLi.append(elementButtonUp, elementButtonDown);
          elementDiv.appendChild(elementLi)
          this.shopList.appendChild(elementDiv)

      })
      this.shopList.querySelectorAll("li button").forEach((btn) => btn.addEventListener("click", (e) => {
          const product = e.target.value;
          const action = e.target.classList.value;
          store.dispatch(changeOrder({product, action}))
      }))
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
  }
}

export default ShoppingList;
