import React from "react";
import { Field, reduxForm } from "redux-form";
import FontAwesome from "components/FontAwesome";
import pokemonTypes from "pokemonTypes";
import Checkbox from "components/Checkbox";
import Radiobutton from "components/Radiobutton";
import Card from "components/Card";

import "./SearchForm.css";

const SearchForm = ({ handleSubmit, pristine, reset, submitting }) => {
  const types = pokemonTypes.map((type, i) => (
    <Checkbox key={type + i} type={type} />
  ));

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <div className="SearchForm__search-bar">
          <div className="SearchForm__search-bar-input-border">
            <Field
              className="SearchForm__search-bar-input"
              id="search"
              name="search"
              component="input"
              type="text"
              placeholder="charmander"
            />
          </div>

          <button
            className="SearchForm__submit"
            type="submit"
            disabled={pristine || submitting}
          >
            <FontAwesome icon="search" />
          </button>
        </div>
        <p className="SearchForm__help-text">
          Try searching for "grass" of "pikachu", or write nothing at all to get
          everything
        </p>
      </Card>

      <Card>
        <div>
          <header className="SearchForm__options-header">
            <FontAwesome
              icon="filter"
              className="SearchForm__filter-header-icon"
            />
            Filter ...
          </header>
          <div className="SearchForm__filter">
            <label className="SearchForm__filter-label">Type</label>
            <div className="SearchForm__filter-types">{types}</div>
          </div>
        </div>

        <div>
          <header className="SearchForm__options-header SearchForm__sort-header">
            <FontAwesome icon="sort" className="SearchForm__sort-header-icon" />
            Sort ...
          </header>
          <div className="SearchForm__sort">
            <Radiobutton
              name="sort"
              value="alphabetical"
              label="Alphabetical"
            />
            <Radiobutton
              name="sort"
              value="reversealphabetical"
              label="Reverse alphabetical"
            />
            <Radiobutton name="sort" value="popularity" label="Popularity" />
          </div>
        </div>
      </Card>
    </form>
  );
};

export default reduxForm({
  form: "searchForm", // a unique identifier for this form
  initialValues: { sort: "alphabetical" }
})(SearchForm);
