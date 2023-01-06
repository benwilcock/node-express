const messages = require('../messages');

describe('messages', () => {
    it('has a subject', () => {
        console.log(messages);
        expect(messages).toHaveProperty('msg_subject');
        expect(typeof messages.msg_subject).toBe('string');
    });

    it('has a body', () => {
        expect(messages).toHaveProperty('msg_body');
        expect(typeof messages.msg_body).toBe('string');
      });
      
      it('has a client', () => {
        expect(messages).toHaveProperty('client');
        expect(typeof messages.client).toBe('string');
      });
      
      it('has a framework', () => {
        expect(messages).toHaveProperty('framework');
        expect(typeof messages.framework).toBe('string');
      });
      
});

