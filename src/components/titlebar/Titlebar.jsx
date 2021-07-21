import React from 'react'
import TitleBarCss from './titlebar.module.css'
const TitleBar = ({
  database,
  searchValue,
  onSearchChange,
  clearSearchValue,
}) => {
  return (
    <div>
      {database ? (
        <div className={TitleBarCss.titlebar}>
          <h5>Faculty Directory for Multi Universities </h5>
          <div className={TitleBarCss.searchBox_fakeInput}>
            <div className={TitleBarCss.searchBox_inputWrapper}>
              <input
                id="myInput"
                type="text"
                className={`${TitleBarCss.form_control} ${TitleBarCss.searchBox_input} ${TitleBarCss.js_searchBox_input}`}
                value={searchValue}
                onChange={onSearchChange}
                placeholder="Search"
              />
            </div>
            <div className={TitleBarCss.searchBox_clearWrapper}>
              <span
                className={`${TitleBarCss.searchBox_clear} ${TitleBarCss.js_clearSearchBox}`}
                onClick={() => clearSearchValue()}
              >
                <i className="fa fa-times-circle"></i>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className={TitleBarCss.titlebar}>
          <h5>User Information </h5>
        </div>
      )}
    </div>
  )
}

export default TitleBar
