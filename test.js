ary = ["정민규", "양홍주", "김유나"];

const dfs = (n, ret) => {
  if (n === 3) {
    st = "";
    for (const a of ret) {
      st += a;
    }
    console.log(st);
    return;
  }

  for (let i = 0; i < 3; i++) {
    dfs(n + 1, [...ret, ary[ret.length][i]]);
  }
};

dfs(0, []);
