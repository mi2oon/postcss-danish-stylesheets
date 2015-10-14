import postcss from 'postcss';

import cssProperties from './properties.json';
import cssValues from './values.json';

export default postcss.plugin('postcss-danish-stylesheets', () => {
    return (css) => {
        css.walkDecls(decl => {

            // Properties
            Object.keys(cssProperties).forEach(property => {
                const cssProperty = cssProperties[property];
                decl.prop === cssProperty && (decl.prop = property);
            });

            // Values
            Object.keys(cssValues).forEach(value => {
                const cssValue = cssValues[value];

                if (typeof cssValue === 'string') {
                    decl.value = decl.value.replace(cssValue, value);
                    return;
                }

                cssValue.forEach(val => {
                    decl.value = decl.value.replace(val, value);
                });
            });

            // Important
            if (decl.value.indexOf('!vigtig') >= 0) {
                decl.value = decl.value.replace(/\s*!vigtig\s*/, '');
                decl.important = true;
            }
        });
    };
});
