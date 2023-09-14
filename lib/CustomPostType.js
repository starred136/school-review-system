import fetch from 'isomorphic-unfetch';

// Define your authentication token
const token = 'token';

async function createCustomPostType() {
  const url = 'http://localhost/wordpress/mysite/wp-json/wp/v2/types';

  const data = {
    name: 'my_custom_post_type',
    label: 'My Custom Post Type',
    description: 'This is a custom post type created via the REST API.',
    hierarchical: false,
    public: true,
    show_ui: true,
    show_in_menu: true,
    show_in_nav_menus: true,
    show_in_rest: true,
    rest_base: 'my-custom-post-type',
    rest_controller_class: 'WP_REST_Posts_Controller',
    supports: {
      title: true,
      editor: true,
      author: true,
      thumbnail: true,
      excerpt: true,
      comments: true,
      custom_fields: true,
      revisions: true,
      trackbacks: true,
      page_attributes: true,
      post_formats: true,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const newCustomPostType = await response.json();
      console.log('Custom post type created:', newCustomPostType);
    } else {
      console.error('Failed to create custom post type');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}


export default createCustomPostType;

