import React from 'react'
import TitleBarCss from './titlebar.module.css'

const TitleBar = ({
  database,
  searchValue,
  onSearchChange,
  clearSearchValue,
  form,
}) => {
  return (
    <div>
      {database ? (
        <div className={TitleBarCss.titlebar}>
          <h5>Faculty Database </h5>
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
                style={
                  !searchValue ? { display: 'none' } : { display: 'block' }
                }
                className={`${TitleBarCss.searchBox_clear} ${TitleBarCss.js_clearSearchBox}`}
                onClick={() => clearSearchValue()}
              >
                <i className="fa fa-times-circle"></i>
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {form ? (
        <div className={TitleBarCss.titlebar}>
          <h5>
            Faculty Directory for Multi Universities &ensp;
            <span className={TitleBarCss.tooltip}>
              <span className={TitleBarCss.tooltiptext}>
                <ul>
                  <h5>Instructions</h5>
                  <li>All fields are mandatory.</li>
                  <li>
                    As Per given instructions Tables are in One To Many Relation
                  </li>
                  <li>
                    Thus, You can add more than one Qualification box, By
                    clicking Add More
                  </li>
                  <li>One Qualification Box field's are mandatory </li>
                  <li>
                    You can Remove Specific Qualification field. Click on Edit
                    and remove the field
                  </li>
                  <li>
                    Also, You can update even signle qualification field or you
                    can delete one qualification field
                  </li>
                </ul>
              </span>
              &#9432;
            </span>
          </h5>
        </div>
      ) : null}
    </div>
  )
}

export default TitleBar
