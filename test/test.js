import postcss from 'postcss';
import { expect } from 'chai';

import plugin from '../';

const test = (input, output, opts, done) => {
    postcss([ plugin(opts) ])
        .process(input)
        .then(result => {
            expect(result.css).to.eql(output);
            expect(result.warnings()).to.be.empty;
            done();
        })
        .catch(done);
};

describe('postcss-danish-stylesheets', () => {
    it('converted properties', done => {
        test(
            'a{ farve: xxx; }',
            'a{ color: xxx; }',
        {}, done);
    });
    it('converted values', done => {
        test(
            'a{ xxx: fed; }',
            'a{ xxx: bold; }',
        {}, done);
    });
    it('all', done => {
        test(
            'a{ xxx: fed!vigtig; farve: xxx; }',
            'a{ xxx: bold !important; color: xxx; }',
        {}, done);
    });
});
