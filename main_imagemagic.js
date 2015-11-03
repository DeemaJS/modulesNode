var imagic= require('imagemagick');
var path, path_m;

imagic.resize({srcPath: path, dstPath: path_m, width: 1621, filter: 'Point'}, function(err, stdout, stderr){
    if (err) throw err;
});

imagic.readMetadata(path, function(err, metadata){
    if (err) throw err;
    capture_time = metadata.exif.dateTimeOriginal;
});

