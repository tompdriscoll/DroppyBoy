class Upload < ApplicationRecord
    
    after_initialize :set_type
    
    validates :name, :type, :path, :uploader_id, presence: true

    belongs_to :uploader, 
    class_name: :User

    IMAGE_SUFFIXES = 
    ['.3fr', '.ai', '.arw', '.bmp'  '.cr2',
    '.crw', '.dcr', '.dcs', '.dng', '.dwg', '.erf', 
    '.gif', '.heic', '.jpeg', '.jpg', '.kdc', 
    '.mef', '.mos', '.mrw', '.nef', '.nrw', '.orf', 
    '.pef', '.png', '.ppm', '.psd', '.r3d', '.raf', 
    '.rw2', '.rwl', '.sr2', '.svg', '.svgz', '.tif', 
    '.tiff', '.wbmp', '.webp', '.x3f']

    TEXT_SUFFIXES = 
    ['.as', '.as3', '.asm', '.aspx', '.bat', '.c', 
    '.cc', '.cmake', '.coffee', '.cpp', '.cs', '.css', 
    '.cxx', '.diff', '.erb', '.erl', '.groovy', '.gvy', 
    '.h', '.haml', '.hh', '.hpp', '.hxx', '.java', '.js', 
    '.json', '.jsx', '.less', '.lst', '.m', '.make', 
    '.markdown', '.md', '.mdown', '.mkdn', '.ml', '.mm', 
    '.out', '.patch', '.php', '.pl', '.plist', '.properties', 
    '.py', '.rb', '.sass', '.scala', '.script', '.scm', '.scss', 
    '.sh', '.sml', '.sql', '.swift', '.txt', '.vb', '.vi', '.vim', 
    '.xhtml', '.xhtml', '.xml', '.xsd', '.xsl', '.yaml', '.yml']

    PRES_SUFFIXES =
    ['.key', '.keynote', '.odp', '.ppt', '.pptm', '.pptx', '.xd']

    ZIP_SUFFIXES =
    ['.7z', '.bz', '.bz2', '.cpio', '.gz', '.iso', '.lha', 
    '.lz', '.lzh', '.lzma', '.rar', '.tar', '.taz', '.tbz', 
    '.tbz2', '.tgz', '.tlz', '.txz', '.tz', '.xar', '.xz', '.z', '.zip']

    AUDIO_SUFFIXES =
    ['.aac', '.air', '.aiff', '.m4a', '.m4r', '.mp3', '.oga', '.ogg', '.wav', '.wma']

    
    VIDEO_SUFFIXES =
    ['.3gp', '.3gpp', '.3gpp2', '.asf', '.avi', '.dv', '.m2t', '.m4v', '.mkv', '.mov', '.mp4', 
    '.mpeg', '.mpg', '.mts', '.mxf', '.ogv', '.rm', '.ts', '.vob', '.webm', '.wmv']

    DOC_SUFFIXES =
    ['.csv', '.doc', '.docm', '.eps', '.numbers', '.ods', '.odt', '.otf', 
    '.pages', '.pdf', '.ps', '.rtf', '.sketch', '.ttf', '.xd', '.xls', '.xlsx']

    LINK_SUFFIXES = ['.url', '.webloc', '.website']



    def get_type(path)
        return 'image' if IMAGE_SUFFIXES.any? {|suf| path.end_with?(suf)}
        return 'text' if TEXT_SUFFIXES.any? {|suf| path.end_with?(suf)}
        return 'presentation' if PRES_SUFFIXES.any? {|suf| path.end_with?(suf)}
        return 'zip' if ZIP_SUFFIXES.any? {|suf| path.end_with?(suf)}
        return 'audio' if AUDIO_SUFFIXES.any? {|suf| path.end_with?(suf)}
        return 'video' if VIDEO_SUFFIXES.any? {|suf| path.end_with?(suf)}
        return 'doc' if DOC_SUFFIXES.any? {|suf| path.end_with?(suf)}
        return 'link' if LINK_SUFFIXES.any? {|suf| path.end_with?(suf)}
    end

    def set_type
        self.type = get_type(self.path)
    end
end