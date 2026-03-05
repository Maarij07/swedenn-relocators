# POST PAGE - UI & LAYOUT DESIGN GUIDE
## Frontend Components & Styling Only

---

## 1. HERO SECTION

### Layout
- Full-width container with background image
- Dark overlay gradient for text contrast
- Height: 480px (desktop), responsive on mobile

### Components Used
- `Box` - Main container
- `Container` - Content wrapper
- `Typography` - Title (h3 variant)
- `Avatar` - Author image
- `ListItemText` - Author name + date
- `SpeedDial` - Share buttons

### Styling
```jsx
<Box
  sx={{
    backgroundImage: `linear-gradient(...), url(${coverUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 480,
    overflow: 'hidden',
  }}
>
  <Container sx={{ height: 1, position: 'relative' }}>
    {/* Title */}
    <Typography
      variant="h3"
      sx={{
        zIndex: 9,
        maxWidth: 480,
        position: 'absolute',
        pt: { xs: 2, md: 8 },
        color: 'common.white',
      }}
    >
      {title}
    </Typography>

    {/* Author Info - Bottom Left */}
    <Box sx={{ left: 0, width: 1, bottom: 0, position: 'absolute' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', px: { xs: 2, md: 3 }, pb: { xs: 3, md: 8 } }}>
        <Avatar alt={author.name} src={author.avatarUrl} sx={{ width: 64, height: 64, mr: 2 }} />
        <ListItemText
          sx={{ color: 'common.white' }}
          primary={author.name}
          secondary={createdAt}
        />
      </Box>

      {/* Share Buttons - Bottom Right */}
      <SpeedDial
        direction={smUp ? 'left' : 'up'}
        ariaLabel="Share post"
        icon={<ShareIcon />}
        sx={{
          position: 'absolute',
          bottom: { xs: 32, md: 64 },
          right: { xs: 16, md: 24 },
        }}
      >
        {/* Social icons */}
      </SpeedDial>
    </Box>
  </Container>
</Box>

Key Styling Points
Background overlay: rgba(20, 26, 33, 0.64) (dark grey with transparency)
Text color: #FFFFFF (white)
Absolute positioning for author info and share buttons
Responsive padding: px: { xs: 2, md: 3 }
2. BREADCRUMBS SECTION
Layout
Centered below hero
Max width: 720px
Padding: py: 3, mb: 5
Components
Container - Full width wrapper
CustomBreadcrumbs - Navigation links
Styling
<Container
  maxWidth={false}
  sx={{
    py: 3,
    mb: 5,
    borderBottom: `solid 1px ${theme.vars.palette.divider}`,
  }}
>
  <CustomBreadcrumbs
    links={[
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Post Title' },
    ]}
    sx={{ maxWidth: 720, mx: 'auto' }}
  />
</Container>
3. MAIN CONTENT SECTION
Layout
Max width: 720px (centered)
Vertical stack layout
Padding: py varies by section
Components
Container - Full width wrapper
Stack - Vertical layout
Typography - Text content
Markdown - Rich content rendering
Styling
<Container maxWidth={false}>
  <Stack sx={{ maxWidth: 720, mx: 'auto' }}>
    {/* Description */}
    <Typography variant="subtitle1">
      {description}
    </Typography>

    {/* Markdown Content */}
    <Markdown>{content}</Markdown>

    {/* Rest of sections */}
  </Stack>
</Container>
4. TAGS SECTION
Layout
Horizontal flex wrap
Gap between tags: 8px
Components
Box - Container
Chip - Individual tags
Styling
<Box sx={{ gap: 1, display: 'flex', flexWrap: 'wrap' }}>
  {tags.map((tag) => (
    <Chip key={tag} label={tag} variant="soft" />
  ))}
</Box>
<Box sx={{ gap: 1, display: 'flex', flexWrap: 'wrap' }}>
  {tags.map((tag) => (
    <Chip key={tag} label={tag} variant="soft" />
  ))}
</Box>
Chip Variants
variant="soft" - Light background with colored text
variant="outlined" - Border only
variant="filled" - Solid background
5. ENGAGEMENT METRICS SECTION
Layout
Horizontal flex
Favorite checkbox + avatar group
Bordered top and bottom (dashed)
Components
Box - Container
FormControlLabel - Checkbox with label
Checkbox - Heart icon checkbox
AvatarGroup - Stack of avatars
Avatar - Individual user avatars
Styling
<Stack
  spacing={3}
  sx={{
    py: 3,
    borderTop: `dashed 1px ${theme.vars.palette.divider}`,
    borderBottom: `dashed 1px ${theme.vars.palette.divider}`,
  }}
>
  {/* Favorites */}
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <FormControlLabel
      label={favoriteCount}
      control={
        <Checkbox
          defaultChecked
          size="small"
          color="error"
          icon={<HeartIcon />}
          checkedIcon={<HeartIcon />}
        />
      }
      sx={{ mr: 1 }}
    />

    <AvatarGroup
      sx={{
        [`& .${avatarGroupClasses.avatar}`]: {
          width: 32,
          height: 32,
        },
      }}
    >
      {favoritePeople.map((person) => (
        <Avatar key={person.name} alt={person.name} src={person.avatarUrl} />
      ))}
    </AvatarGroup>
  </Box>
</Stack>
6. COMMENTS SECTION
Layout
Title with comment count
Comment form
Divider
Comment list
Components
Typography - Section title
PostCommentForm - Input form
Divider - Visual separator
PostCommentList - Comments display
Styling
{/* Title */}
<Box sx={{ mb: 3, mt: 5, display: 'flex' }}>
  <Typography variant="h4">Comments</Typography>
  <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
    ({commentCount})
  </Typography>
</Box>

{/* Form */}
<PostCommentForm />

{/* Divider */}
<Divider sx={{ mt: 5, mb: 2 }} />

{/* Comments List */}
<PostCommentList comments={comments} />
7. COMMENT FORM
Layout
Multiline text input (4 rows)
Action buttons (image, attachment, emoji)
Submit button on right
Components
Box - Container
TextField - Text input (multiline)
IconButton - Action buttons
Button - Submit button
Styling
<Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
  {/* Input */}
  <TextField
    fullWidth
    multiline
    rows={4}
    placeholder="Write some of your comments..."
    variant="outlined"
  />

  {/* Actions */}
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
      <IconButton>
        <GalleryIcon />
      </IconButton>
      <IconButton>
        <AttachmentIcon />
      </IconButton>
      <IconButton>
        <EmojiIcon />
      </IconButton>
    </Box>

    <Button type="submit" variant="contained">
      Post comment
    </Button>
  </Box>
</Box>
8. COMMENT ITEM
Layout
Avatar on left
Comment content on right
Nested replies indented (pl: 8)
Reply button on right
Components
Box - Container
Avatar - User avatar
Typography - Name, date, message
Button - Reply button
TextField - Reply input (hidden by default)
Styling
<Box
  sx={{
    pt: 3,
    gap: 2,
    display: 'flex',
    position: 'relative',
    ...(isReply && { pl: 8 }), // Indent nested replies
  }}
>
  {/* Avatar */}
  <Avatar alt={name} src={avatarUrl} sx={{ width: 48, height: 48 }} />

  {/* Content */}
  <Box
    sx={{
      pb: 3,
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      borderBottom: `solid 1px ${theme.vars.palette.divider}`,
    }}
  >
    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
      {name}
    </Typography>

    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
      {date}
    </Typography>

    <Typography variant="body2" sx={{ mt: 1 }}>
      {message}
    </Typography>

    {/* Reply input - shown on demand */}
    {showReplyInput && (
      <TextField fullWidth autoFocus placeholder="Write comment..." sx={{ mt: 2 }} />
    )}
  </Box>

  {/* Reply button */}
  {!isReply && (
    <Button
      size="small"
      color={showReplyInput ? 'primary' : 'inherit'}
      startIcon={<PenIcon />}
      onClick={toggleReply}
      sx={{ right: 0, position: 'absolute' }}
    >
      Reply
    </Button>
  )}
</Box>
9. COMMENT LIST
Layout
Vertical stack of comments
Nested replies indented
Pagination at bottom
Components
Box - Container
PostCommentItem - Individual comments
Pagination - Page navigation
Styling
<>
  {comments.map((comment) => (
    <Box key={comment.id}>
      {/* Main comment */}
      <PostCommentItem {...comment} />

      {/* Nested replies */}
      {comment.replies.map((reply) => (
        <PostCommentItem key={reply.id} {...reply} isReply />
      ))}
    </Box>
  ))}

  {/* Pagination */}
  <Pagination
    count={8}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      my: { xs: 5, md: 8 },
    }}
  />
</>
10. RELATED POSTS SECTION
Layout
Grid layout: 4 columns (desktop), 3 (tablet), 2 (mobile), 1 (xs)
Spacing: 24px between items
Padding bottom: 120px
Components
Container - Full width wrapper
Typography - Section title
Grid - Grid layout
PostItem - Individual post cards
Styling
<Container sx={{ pb: 15 }}>
  <Typography variant="h4" sx={{ mb: 5 }}>
    Recent Posts
  </Typography>

  <Grid container spacing={3}>
    {posts.map((post) => (
      <Grid
        key={post.id}
        size={{
          xs: 12,  // 1 column on mobile
          sm: 6,   // 2 columns on tablet
          md: 4,   // 3 columns on desktop
          lg: 3,   // 4 columns on large desktop
        }}
      >
        <PostItem post={post} />
      </Grid>
    ))}
  </Grid>
</Container>
11. POST ITEM CARD
Layout
Cover image (4:3 aspect ratio)
Author avatar overlay (bottom-left)
Content below image
Engagement metrics at bottom
Components
Card - Card container
Box - Image wrapper
Image - Cover image
Avatar - Author avatar
CardContent - Text content
Typography - Title, date
Link - Clickable title
Styling
<Card>
  {/* Image Section */}
  <Box sx={{ position: 'relative' }}>
    {/* Avatar Shape Background */}
    <AvatarShape
      sx={{
        left: 0,
        zIndex: 9,
        width: 88,
        height: 36,
        bottom: -16,
        position: 'absolute',
      }}
    />

    {/* Author Avatar */}
    <Avatar
      alt={author.name}
      src={author.avatarUrl}
      sx={{
        left: 24,
        zIndex: 9,
        bottom: -24,
        position: 'absolute',
      }}
    />

    {/* Cover Image */}
    <Image alt={title} src={coverUrl} ratio="4/3" />
  </Box>

  {/* Content Section */}
  <CardContent sx={{ pt: 6 }}>
    {/* Date */}
    <Typography variant="caption" component="div" sx={{ mb: 1, color: 'text.disabled' }}>
      {date}
    </Typography>

    {/* Title */}
    <Link
      href={detailsHref}
      color="inherit"
      variant="subtitle2"
      sx={{
        ...maxLine({ line: 2 }), // Max 2 lines with ellipsis
      }}
    >
      {title}
    </Link>

    {/* Engagement Metrics */}
    <Box
      sx={{
        mt: 3,
        gap: 1.5,
        display: 'flex',
        typography: 'caption',
        color: 'text.disabled',
        justifyContent: 'flex-end',
      }}
    >
      <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
        <ChatIcon width={16} />
        {commentCount}
      </Box>
      <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
        <EyeIcon width={16} />
        {viewCount}
      </Box>
      <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
        <ShareIcon width={16} />
        {shareCount}
      </Box>
    </Box>
  </CardContent>
</Card>
THEME & COLORS
Primary Colors
primary: {
  main: '#00A76F',      // Green
  light: '#5BE49B',
  lighter: '#C8FAD6',
  dark: '#007867',
  darker: '#004B50',
}

secondary: {
  main: '#8E33FF',      // Purple
  light: '#C684FF',
  lighter: '#EFD6FF',
}

error: {
  main: '#FF5630',      // Red (for heart icon)
}
Typography
fontFamily: {
  primary: 'Public Sans Variable',
  secondary: 'Barlow',
}

// Variants used:
h3: Hero title
h4: Section titles
subtitle1: Post description
subtitle2: Post title in cards
body2: Comment message
caption: Dates, metadata
Spacing
// MUI uses 8px base unit
gap: 1 = 8px
gap: 2 = 16px
gap: 3 = 24px
px: 2 = 16px
py: 3 = 24px
RESPONSIVE BREAKPOINTS
xs: 0px      // Mobile (< 600px)
sm: 600px    // Tablet (600px - 960px)
md: 960px    // Desktop (960px - 1280px)
lg: 1280px   // Large (1280px - 1920px)
xl: 1920px   // Extra large (> 1920px)
Common Responsive Patterns
// Responsive padding
px: { xs: 2, md: 3 }    // 16px mobile, 24px desktop
py: { xs: 3, md: 8 }    // 24px mobile, 64px desktop

// Responsive display
display: { xs: 'none', md: 'flex' }  // Hidden on mobile, shown on desktop

// Responsive grid
size={{ xs: 12, sm: 6, md: 4, lg: 3 }}  // 1, 2, 3, 4 columns

// Responsive direction
direction: smUp ? 'left' : 'up'  // Horizontal on desktop, vertical on mobile
QUICK COPY-PASTE COMPONENTS
Hero Section Template
<Box sx={{ backgroundImage: `url(${coverUrl})`, height: 480, overflow: 'hidden' }}>
  <Container sx={{ height: 1, position: 'relative' }}>
    <Typography variant="h3" sx={{ position: 'absolute', pt: { xs: 2, md: 8 }, color: 'common.white' }}>
      {title}
    </Typography>
    <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: 1, pb: { xs: 3, md: 8 }, px: { xs: 2, md: 3 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={author.avatarUrl} sx={{ width: 64, height: 64, mr: 2 }} />
        <Box>
          <Typography sx={{ color: 'common.white' }}>{author.name}</Typography>
          <Typography sx={{ color: 'common.white', opacity: 0.64 }}>{date}</Typography>
        </Box>
      </Box>
    </Box>
  </Container>
</Box>
Post Card Template
<Card>
  <Box sx={{ position: 'relative' }}>
    <Avatar src={author.avatarUrl} sx={{ position: 'absolute', left: 24, bottom: -24, zIndex: 9 }} />
    <Image src={coverUrl} ratio="4/3" />
  </Box>
  <CardContent sx={{ pt: 6 }}>
    <Typography variant="caption" sx={{ color: 'text.disabled' }}>{date}</Typography>
    <Typography variant="subtitle2">{title}</Typography>
    <Box sx={{ mt: 3, display: 'flex', gap: 1.5, justifyContent: 'flex-end', typography: 'caption', color: 'text.disabled' }}>
      <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}><ChatIcon width={16} />{comments}</Box>
      <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}><EyeIcon width={16} />{views}</Box>
      <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}><ShareIcon width={16} />{shares}</Box>
    </Box>
  </CardContent>
</Card>

Comment Item Template
<Box sx={{ pt: 3, gap: 2, display: 'flex', position: 'relative', ...(isReply && { pl: 8 }) }}>
  <Avatar src={avatarUrl} sx={{ width: 48, height: 48 }} />
  <Box sx={{ pb: 3, flex: 1, borderBottom: `solid 1px ${theme.vars.palette.divider}` }}>
    <Typography variant="subtitle2">{name}</Typography>
    <Typography variant="caption" sx={{ color: 'text.disabled' }}>{date}</Typography>
    <Typography variant="body2" sx={{ mt: 1 }}>{message}</Typography>
  </Box>
  {!isReply && <Button size="small" onClick={toggleReply}>Reply</Button>}
</Box>
SUMMARY
Key Takeaways:

Use MUI Grid for responsive layouts
Max content width: 720px (centered)
Hero height: 480px with absolute positioning
Comments: Nested with 32px (pl: 8) indentation
Related posts: 4 columns (lg), 3 (md), 2 (sm), 1 (xs)
Colors: Green (#00A76F) primary, Purple (#8E33FF) secondary
Spacing: Use MUI's 8px base unit system
Responsive: Always use breakpoint objects { xs, sm, md, lg }