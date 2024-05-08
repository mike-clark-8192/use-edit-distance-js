import * as eddi from 'edit-distance';

const seq1 = 'quick brown fox jumps'.split(' ');
const seq2 = 'quick red fox'.split(' ');

const ed = new eddi.SequenceMatcher(seq1, seq2);

ed.getOpcodes().forEach((opcode) => {
    console.log(opcode);
});
