import React from "react";
import { Field, reduxForm } from "redux-form";

import pokemonTypes from "pokemonTypes";
import Checkbox from "containers/CheckboxContainer";
import Radiobutton from "containers/RadiobuttonContainer";
import FontAwesome from "components/FontAwesome";
import Card from "components/Card";
import "./SearchForm.css";

const SearchForm = ({ handleSubmit, pristine, reset, submitting }) => {
  const types = Object.keys(pokemonTypes).map((type, i) => {
    return <Checkbox key={type + i} type={type} />;
  });

  return (
    <form onSubmit={handleSubmit}>
      <Card margin="1rem 0">
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
        </div>
        <p className="SearchForm__help-text">
          Try searching for a pokemon like "pikachu", or "char", or write
          nothing at all to get everything
        </p>
      </Card>

      <Card margin="1rem 0 0">
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
            <Radiobutton name="sort" value="pokemonnumber" label="Number" />
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
  initialValues: { sort: "pokemonnumber" },
  onSubmit: () => {}
})(SearchForm);
