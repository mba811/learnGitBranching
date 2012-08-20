
/**
 * Constants....!!!
 */
var constants = {
  clickDragMass: 20,
  baseMass: 1,
};

var time = {
  edgeAddInterval: 200,
  breathePeriod: 0.3
};

/**
 * Graphics style
 */
var graphics = {
  // colors
  edgeStroke: 'rgba(94%, 96%, 98%, 0.5)', // '#EFF5FB',
  nodeEdge: 'rgba(94%, 96%, 98%, 0.9)', // '#EFF5FB',
  nodeFill: '#0066cc',

  // widths
  nodeStrokeWidth: 15,
  edgeWidth: 2,
};

function randomString(string_length) {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var randomstring = '';
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }
  return randomstring;
}
