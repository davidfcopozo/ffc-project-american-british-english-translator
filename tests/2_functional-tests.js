const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const validAmericanText = "I ate yogurt for breakfast.";

suite('Functional Tests', () => {
  suite('POST request to /api/translate', () => {

    test("Translation with text and locale fields", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          text: validAmericanText,
          locale: Translator.AMERICAN_TO_BRITISH_LOCALE,
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, "text");
          assert.property(res.body, "translation");
          assert.strictEqual(
            res.body.translation,
            `I ate <span class="highlight">yoghurt</span> for breakfast.`
          );
          done();
        });
    });

    test("Translation with text and invalid locale field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          text: validAmericanText,
          locale: "Translator.AMERICAN_TO_BRITISH_LOCALE",
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, "error");
          assert.strictEqual(
            res.body.error,
            `Invalid value for locale field`
          );
          done();
        });
    });

    test("Translation with missing text field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          locale: Translator.AMERICAN_TO_BRITISH_LOCALE,
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, "error");
          assert.strictEqual(
            res.body.error,
            `Required field(s) missing`
          );
          done();
        });
    });

    test("Translation with missing locale field", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          text: validAmericanText,
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, "error");
          assert.strictEqual(
            res.body.error,
            `Required field(s) missing`
          );
          done();
        });
    });

    test("Translation with empty text", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          text: '',
          locale: Translator.AMERICAN_TO_BRITISH_LOCALE,
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, "error");
          assert.strictEqual(
            res.body.error,
            `No text to translate`
          );
          done();
        });
    });

    test("Translation with text that needs no translation", (done) => {
      chai
        .request(server)
        .post("/api/translate")
        .send({
          text: 'I ate yoghurt for breakfast.',
          locale: Translator.AMERICAN_TO_BRITISH_LOCALE,
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, "text");
          assert.property(res.body, "translation");
          assert.strictEqual(
            res.body.translation,
            `Everything looks good to me!`
          );
          done();
        });
    });
  })
});
