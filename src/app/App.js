import React from "react";
import "../asset/css/App.css";

function App() {
  return (
    <div className="container-fluid position-relative" style={{ minHeight: "100vh"}}>
      <div className="row p-5">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="card shadow border-0">
            <div className="position-absolute mt-2 d-flex align-items-baseline" style={{ right: "0" }}>
              <p class="card-text"><small class="text-muted">edited</small></p>
              <button type="button" title="edit" className="btn bg-transparent border-0 btn-light m-2 p-0">&#9998;</button>
              <button type="button" title="delete" className="btn bg-transparent border-0 btn-light m-2 p-0">&#128465;</button>
            </div>
            <div class="card-body mt-4 mb-2">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p class="card-text"><small class="text-muted">Wednesday, 22 January 2020 (WAT) 01:04</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className="add-todo">
        <button type="button" title="edit" className="btn bg-transparent border-0 btn-light m-2 px-3 py-2 rounded-circle shadow">&#43;</button>
      </div>
    </div>
  );
}

export default App;
