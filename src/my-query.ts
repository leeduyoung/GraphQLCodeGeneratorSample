import { gql } from '@apollo/client'

export const QUERY_CONTAINNERS = gql`
  query containers {
    containers {
      id
      name
      description
      area
      isPublic
      stack {
        software
        cpu
        storageSize
        memory
      }
      accessLink {
        workspace
        terminal
      }
      status
      owner {
        id
        name
      }
      createdAt
    }
  }
`

export const QUERY_BOARD_NOTICE = gql`
  query boardNotice($where: BoardNoticeWhere!) {
    boardNotice(where: $where) {
      id
      title
      content
      serviceType
      files {
        id
        type
        name
        url
      }
      viewCount
      createdAt
      cursorInfo {
        before
        after
      }
    }
  }
`
