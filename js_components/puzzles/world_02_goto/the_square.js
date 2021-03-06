/**
 * This is free and unencumbered software released into the public domain.
 * See UNLICENSE.
 */

function puzzle_the_square() {
  return {
    id: "the_square",
    name: "The Square",

    // TODO: add link to goto help page
    hint: 
      "<ul>"
      + "<li>You want to create a loop using the " + keyword("goto") + " "
      + "instruction.</li>"
      + "<li><strong>Each time the loop executes</strong>, you "
      + "want your robot "
      + "to pick up <strong>four coins</strong>, and then position itself "
      + "so that it can pickup the next four coins.</li>"
      + "<li>" + learnMoreGoto() + "</li>"
      + "</ul>"

    ,
    win_conditions: [
      {type: WinCondition.COLLECT_COINS}
    ],

    // TODO: add a constraint that you can only use 4 move instructions
    constraints: {
      "max_instructions": 8,
    },

    solutions: [
      "start: move\nmove\nmove\nmove\nturn right\ngoto start"
    ],
    num_cols: 9,
    num_rows: 7,
    // BUG: this should be programming_bot_id, not index
    programming_bot_index: 0,
    bots : [
      {
        botColor: BotColor.BLUE,
        cellX: 2,
        cellY: 1,
        facing: Direction.RIGHT,
        program: "",
      },
    ],
    coins: [
      {x:3, y:1},
      {x:4, y:1},
      {x:5, y:1},
      {x:6, y:1},
      {x:6, y:2},
      {x:6, y:3},
      {x:6, y:4},
      {x:6, y:5},
      {x:3, y:5},
      {x:4, y:5},
      {x:5, y:5},
      {x:2, y:2},
      {x:2, y:3},
      {x:2, y:4},
      {x:2, y:5},
    ],
    // TODO: make it so that you can omit empty properties from a puzzle
    blocks: [],
    traps: [
      //{x:3, y:0}
    ]
  }
}