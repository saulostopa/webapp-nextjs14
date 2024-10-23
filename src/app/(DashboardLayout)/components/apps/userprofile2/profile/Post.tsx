import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';

import { fetchPosts } from '@/store/apps/userProfile/UserProfileSlice2';
import { useDispatch, useSelector } from '@/store/hooks';

import type { PostType } from '../../../../types/apps/userProfile';
import BlankCard from '../../../shared/BlankCard';
import PostItem from './PostItem';
import { PostTextBox } from './PostTextBox';
import { TaskCard } from './TaskCard';

const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const getPosts: PostType[] = useSelector(
    (state) => state.userpostsReducer2.posts,
  );

  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <TaskCard />
      </Grid>
      <Grid item sm={12}>
        <BlankCard>
          <Box p={3}>
            <PostTextBox />
            {getPosts.map((posts) => {
              return (
                <Grid item sm={12} key={posts.id}>
                  <PostItem post={posts} />
                </Grid>
              );
            })}
          </Box>
        </BlankCard>
      </Grid>
    </Grid>
  );
};

export default Post;
