import { post } from '../utils/request'

// 首页
export function itemMovies(url) {
  return post('/api/v2/proxy', {
    // url: 'http://baobab.kaiyanapp.com/api/v4/tabs/selected?date=1554771600000&num=2&page=2'
    url:url
  })
}

// 热门
export function hotMovies() {
  return post('/api/v2/proxy', {
    url: 'http://baobab.kaiyanapp.com/api/v4/discovery/hot'
    
  })
}

// 分类
export function classifyMovies() {
  return post('/api/v2/proxy', {
    url: 'http://baobab.kaiyanapp.com/api/v4/discovery/category'
    
  })
}

// 作者
export function authorMovies() {
  return post('/api/v2/proxy', {
    url: 'http://baobab.kaiyanapp.com/api/v4/pgcs/all'
    
  })
}