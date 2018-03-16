const fs = require('fs');
const Handlebars = require('handlebars');

const template = fs.readFileSync('templates/seed.handlebar', 'utf8');

const level1 = 10;
const level2 = 5;
const level3 = 5;
const level4 = 3;
const level5 = 2;
const level6 = 2;

const comment = 5;

const data = {
  level1:[]
};

var isEven = function(number) {
  // Your code goes here!
  if (number % 2 == 0){
    return(true);
  }
  else{
    return(false);
  }
};

var comments = [];
for(var commentIndex=0;commentIndex<comment;commentIndex++){
  comments.push({
    name:`comment_${commentIndex}`,
    description: 'comment',
    active: isEven(level1Index)
  })
}

for(var level1Index=0;level1Index<level1;level1Index++){
  const level1Elem = {
    name: `level_${level1Index}`,
    description: `level_${level1Index}`,
    active: isEven(level1Index),
    children:[],
    comments: comments
  }
  for(var level2Index=0;level2Index<level2;level2Index++){
    const level2Elem = {
      name: `level_${level1Index}_${level2Index}`,
      description: `level_${level1Index}_${level2Index}`,
      active: isEven(level2Index),
      children:[],
      comments: comments
    }
    level1Elem.children.push(level2Elem);
    for(var level3Index=0;level3Index<level3;level3Index++){
      const level3Elem = {
        name: `level_${level1Index}_${level2Index}_${level3Index}`,
        description: `level_${level1Index}_${level2Index}_${level3Index}`,
        active: isEven(level3Index),
        children:[],
        comments: comments
      }
      level2Elem.children.push(level3Elem);
      for(var level4Index=0;level4Index<level4;level4Index++){
        const level4Elem = {
          name: `level_${level1Index}_${level2Index}_${level3Index}_${level4Index}`,
          description: `level_${level1Index}_${level2Index}_${level3Index}_${level4Index}`,
          active: isEven(level4Index),
          children:[],
          comments: comments
        }
        level3Elem.children.push(level4Elem);
        for(var level5Index=0;level5Index<level5;level5Index++){
          const level5Elem = {
            name: `level_${level1Index}_${level2Index}_${level3Index}_${level4Index}_${level5Index}`,
            description: `level_${level1Index}_${level2Index}_${level3Index}_${level4Index}_${level5Index}`,
            active: isEven(level5Index),
            children:[],
            comments: comments
          }
          level4Elem.children.push(level5Elem);
          for(var level6Index=0;level6Index<level6;level6Index++){
            const level6Elem = {
              name: `level_${level1Index}_${level2Index}_${level3Index}_${level4Index}_${level5Index}_${level6Index}`,
              description: `level_${level1Index}_${level2Index}_${level3Index}_${level4Index}_${level5Index}_${level6Index}`,
              active: isEven(level6Index),
              comments: comments
            }
            level5Elem.children.push(level6Elem);
          }
        }
      }
    }
  }

  data.level1.push(level1Elem);
}

const seed = Handlebars.compile(template)(data);

console.log(seed);