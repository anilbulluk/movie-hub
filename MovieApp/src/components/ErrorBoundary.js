import React from 'react';
import { Text } from 'react-native';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false}
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
  }
  render() {
    if (this.state.hasError) {
      return <Text>hata oluştu</Text>
    }
    return this.props.children
  }
}