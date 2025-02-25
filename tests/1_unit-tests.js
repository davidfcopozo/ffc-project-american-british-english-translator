const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  suite('to British English translations', () => {

    test('Mangoes are my favorite fruit', (done) => {
      assert.equal(translator.americanToBritish('Mangoes are my favorite fruit.'), `Mangoes are my <span class="highlight">favourite</span> fruit.`);
      done();
    })

    test('I ate yogurt for breakfast.', (done) => {
      assert.equal(translator.americanToBritish('I ate yogurt for breakfast.'), `I ate <span class="highlight">yoghurt</span> for breakfast.`);
      done();
    })

    test("We had a party at my friend's condo.", (done) => {
      assert.strictEqual(
        translator.americanToBritish("We had a party at my friend's condo."),
        'We had a party at my friend\'s <span class="highlight">flat</span>.'
      );
      done();
    })

    test("Can you toss this in the trashcan for me? to British English", (done) => {
      assert.strictEqual(
        translator.americanToBritish(
          "Can you toss this in the trashcan for me?"
        ),
        'Can you toss this in the <span class="highlight">bin</span> for me?'
      );
      done();
    });

    test("The parking lot was full. to British English", (done) => {
      assert.strictEqual(
        translator.americanToBritish("The parking lot was full."),
        'The <span class="highlight">car park</span> was full.'
      );
      done();
    });

    test("Like a high tech Rube Goldberg machine. to British English", (done) => {
      assert.strictEqual(
        translator.americanToBritish(
          "Like a high tech Rube Goldberg machine."
        ),
        'Like a high tech <span class="highlight">Heath Robinson device</span>.'
      );
      done();
    });

    test("To play hooky means to skip class or work. to British English", (done) => {
      assert.strictEqual(
        translator.americanToBritish(
          "To play hooky means to skip class or work."
        ),
        'To <span class="highlight">bunk off</span> means to skip class or work.'
      );
      done();
    });

    test("No Mr. Bond, I expect you to die. to British English", (done) => {
      assert.strictEqual(
        translator.americanToBritish("No Mr. Bond, I expect you to die."),
        'No <span class="highlight">Mr</span> Bond, I expect you to die.'
      );
      done();
    });

    test("Dr. Grosh will see you now. to British English", (done) => {
      assert.strictEqual(
        translator.americanToBritish("Dr. Grosh will see you now."),
        '<span class="highlight">Dr</span> Grosh will see you now.'
      );
      done();
    });

    test("Lunch is at 12:15 today. to British English", (done) => {
      assert.strictEqual(
        translator.americanToBritish("Lunch is at 12:15 today."),
        'Lunch is at <span class="highlight">12.15</span> today.'
      );
      done();
    });
  });

  suite("to American English translations", () => {
    test("We watched the footie match for a while.", (done) => {
      assert.strictEqual(
        translator.britishToAmerican("We watched the footie match for a while."),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });

    test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
      assert.strictEqual(
        translator.britishToAmerican(
          "Paracetamol takes up to an hour to work."
        ),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
      done()
    });

    test("Translate First, caramelise the onions. to American English", (done) => {
      assert.strictEqual(
        translator.britishToAmerican("First, caramelise the onions."),
        'First, <span class="highlight">caramelize</span> the onions.'
      );
      done();
    });

    test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
      assert.strictEqual(
        translator.britishToAmerican(
          "I spent the bank holiday at the funfair."
        ),
        'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
      );
      done();
    });

    test("Translate I had a bicky then went to the chippy. to American English", (done) => {
      assert.strictEqual(
        translator.britishToAmerican("I had a bicky then went to the chippy."),
        'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
      );
      done();
    });

    test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
      assert.strictEqual(
        translator.britishToAmerican(
          "I've just got bits and bobs in my bum bag."
        ),
        'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
      );
      done();
    });

    test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
      assert.strictEqual(
        translator.britishToAmerican(
          "The car boot sale at Boxted Airfield was called off."
        ),
        'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
      );
      done();
    });

    test("Translate Have you met Mrs Kalyani? to American English", (done) => {
      assert.strictEqual(
        translator.britishToAmerican("Have you met Mrs Kalyani?"),
        'Have you met <span class="highlight">Mrs.</span> Kalyani?'
      );
      done();
    });

    test("Translate Prof Joyner of King's College, London. to American English", (done) => {
      assert.strictEqual(
        translator.britishToAmerican("Prof Joyner of King's College, London."),
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
      );
      done();
    });

    test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
      assert.strictEqual(
        translator.britishToAmerican("Tea time is usually around 4 or 4.30."),
        'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
      );
      done();
    });

    test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
      assert.strictEqual(
        translator.americanToBritish("Mangoes are my favorite fruit."),
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
      done();
    });

    test("Highlight translation in I ate yogurt for breakfast.", (done) => {
      assert.strictEqual(
        translator.americanToBritish("I ate yogurt for breakfast."),
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
      done();
    });

    test("Highlight translation in We watched the footie match for a while.", (done) => {
      assert.strictEqual(
        translator.britishToAmerican(
          "We watched the footie match for a while."
        ),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });

    test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
      assert.strictEqual(
        translator.britishToAmerican(
          "Paracetamol takes up to an hour to work."
        ),
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
      done();
    });

  })
});
