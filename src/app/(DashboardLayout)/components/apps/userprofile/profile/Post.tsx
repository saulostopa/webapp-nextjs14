import Grid from '@mui/material/Grid';
import { useEffect } from 'react';

import { fetchPosts } from '@/store/apps/userProfile/UserProfileSlice';
import { useDispatch, useSelector } from '@/store/hooks';

import type { PostType } from '../../../../types/apps/userProfile';
import PostItem from './PostItem';
import { PostTextBox } from './PostTextBox';

const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const getPosts: PostType[] = useSelector(
    (state) => state.userpostsReducer.posts,
  );

  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <PostTextBox />
      </Grid>
      {getPosts.map((posts) => {
        return (
          <Grid item sm={12} key={posts.id}>
            <PostItem post={posts} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Post;
