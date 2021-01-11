import _ from 'lodash'
import {
  READ_EVENTS,
  CREATE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case READ_EVENT:
    case CREATE_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}
