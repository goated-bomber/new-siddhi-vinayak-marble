import filters from "../../utils/filters";

function FilterPanel({
  category,
  setCategory,

  color,
  setColor,

  finish,
  setFinish,

  application,
  setApplication,

  material,
  setMaterial,

  resetFilters
}) {
  return (
    <section className="filter-panel">

      <div className="container">

        <div className="filter-panel-wrapper">

          <div className="filter-panel-header">

            <span className="section-tag">
              ADVANCED FILTERS
            </span>

            <h2>
              Refine Your Collection
            </h2>

            <p>
              Discover the perfect marble,
              granite, tile, sanitary ware,
              borders and surface solutions
              tailored to your project.
            </p>

          </div>

          <div className="filters-grid">

            <div className="filter-group">

              <label>
                Category
              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >
                <option value="">
                  All Categories
                </option>

                {filters.categories.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>

            <div className="filter-group">

              <label>
                Color
              </label>

              <select
                value={color}
                onChange={(e) =>
                  setColor(e.target.value)
                }
              >
                <option value="">
                  All Colors
                </option>

                {filters.colors.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>

            <div className="filter-group">

              <label>
                Finish
              </label>

              <select
                value={finish}
                onChange={(e) =>
                  setFinish(e.target.value)
                }
              >
                <option value="">
                  All Finishes
                </option>

                {filters.finishes.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>

            <div className="filter-group">

              <label>
                Material
              </label>

              <select
                value={material}
                onChange={(e) =>
                  setMaterial(e.target.value)
                }
              >
                <option value="">
                  All Materials
                </option>

                {filters.materials.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>

            <div className="filter-group">

              <label>
                Suitable For
              </label>

              <select
                value={application}
                onChange={(e) =>
                  setApplication(
                    e.target.value
                  )
                }
              >
                <option value="">
                  All Areas
                </option>

                {filters.applications.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>

          </div>

          <div className="filter-actions">

            <button
              type="button"
              className="secondary-btn"
              onClick={resetFilters}
            >
              Clear Filters
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FilterPanel;