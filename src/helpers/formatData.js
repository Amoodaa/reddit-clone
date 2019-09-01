exports.formatData = comments => {
  comments.reverse().forEach(ele => {
    if (ele.parent_comment) {
      const parent = comments.find(ele2 => ele2.id === ele.parent_comment);
      if (!parent.children) parent.children = [];
      parent.children.push(ele);
    }
  });
  return comments.filter(e => e.parent_comment === null && e.parent_post === null);
};
