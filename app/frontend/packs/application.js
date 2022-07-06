import Rails from "@rails/ujs"
Rails.start()

import '../scripts/game'
import '../styles/application'
import 'bootstrap/dist/js/bootstrap'

const images = require.context('../images', true)
