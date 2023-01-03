var re = /(?:\.([^.]+))?$/;

// result = paths.reduce((r, p) => {
//   var names = p.split("/");
//   names.reduce((q, name) => {
//     var temp = q.find((o) => o.name === name);
//     if (!temp) q.push((temp = { name, children: [] }));
//     return temp.children;
//   }, r);
//   return r;
// }, []);

export const treeify = (items: any[]) => {
  if (!items) return null;
  
  let result = [];

  items.forEach((item) => {
    let depth = 0;
    item.path.split("/").reduce((q, label) => {
      var temp = q.find((o) => o.label === label);
      if (!temp) q.push((temp = { label, children: [], depth, ...item }));
      depth += 1;
      return temp.children;
    }, result);
  });

  return result;
};
