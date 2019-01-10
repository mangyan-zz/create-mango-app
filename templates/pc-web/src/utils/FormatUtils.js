/**
 * Created by mangyan on 2018/12/25.
 * 格式化工具类
 */

import React from 'react';

const FormatUtils = {

  formatWan: (val) => {
    const v = val * 1;
    if (!v || Number.isNaN(v)) return '';

    let result = val;
    if (val > 10000) {
      result = Math.floor(val / 10000);
      result = (
        <span>
        {result}
          <span
            styles={{
              position: 'relative',
              top: -2,
              fontSize: 14,
              fontStyle: 'normal',
              lineHeight: 20,
              marginLeft: 2,
            }}
          >
          万
        </span>
      </span>
      );
    }
    return result;
  }
};

export default FormatUtils;
