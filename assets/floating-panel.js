{% assign block_settings = block.settings %}

{% capture video_style %}
  {%  render 'spacing-style', settings: block_settings %}
  {% render 'border-override', settings: block_settings %}
   --size-style-width: {{ block_settings.custom_width }}%; --size-style-width-mobile: {{ block_settings.custom_width_mobile }}%;
   --size-style-aspect-ratio: {{ block_settings.video.aspect_ratio | default: 'auto' }};
{% endcapture %}

{% render 'video',
  video: block_settings.video,
  video_class: 'spacing-style size-style border-style',
  video_loop: block_settings.video_loop,
  video_style: video_style,
  video_preview_image: block_settings.video.preview_image,
  additional_attributes: block.shopify_attributes,
  section_id: section.id
%}

{% stylesheet %}
  .placeholder-video {
    aspect-ratio: 5 / 3;
  }
{% endstylesheet %}

{% schema %}
{
  "name": "t:names.video",
  "tag": null,
  "settings": [
    {
      "type": "video",
      "id": "video",
      "label": "Upload Video"
    },
    {
      "type": "checkbox",
      "id": "video_autoplay",
      "label": "Autoplay",
      "default": false
    },
    {
      "type": "checkbox",
      "id": "video_loop",
      "label": "Loop video",
      "default": true
    },
    {
      "type": "header",
      "content": "Size"
    },
    {
      "type": "range",
      "id": "custom_width",
      "label": "Desktop width",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "%",
      "default": 100
    },
    {
      "type": "range",
      "id": "custom_width_mobile",
      "label": "Mobile width",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "%",
      "default": 100
    },
    {
      "type": "header",
      "content": "Borders"
    },
    {
      "type": "select",
      "id": "border",
      "label": "Border style",
      "options": [
        { "value": "none", "label": "None" },
        { "value": "solid", "label": "Solid" }
      ],
      "default": "none"
    },
    {
      "type": "range",
      "id": "border_width",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "label": "Border thickness",
      "default": 1,
      "visible_if": "{{ block.settings.border != 'none' }}"
    },
    {
      "type": "range",
      "id": "border_opacity",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "%",
      "label": "Border opacity",
      "default": 100,
      "visible_if": "{{ block.settings.border != 'none' }}"
    },
    {
      "type": "range",
      "id": "border_radius",
      "label": "Border radius",
      "min": 0,
      "max": 100,
      "step": 1,
      "unit": "px",
      "default": 0
    },
    {
      "type": "header",
      "content": "Padding"
    },
    {
      "type": "range",
      "id": "padding-block-start",
      "label": "Top padding",
      "min": 0,
      "max": 32,
      "step": 1,
      "unit": "px",
      "default": 0
    },
    {
      "type": "range",
      "id": "padding-block-end",
      "label": "Bottom padding",
      "min": 0,
      "max": 32,
      "step": 1,
      "unit": "px",
      "default": 0
    },
    {
      "type": "range",
      "id": "padding-inline-start",
      "label": "Left padding",
      "min": 0,
      "max": 32,
      "step": 1,
      "unit": "px",
      "default": 0
    },
    {
      "type": "range",
      "id": "padding-inline-end",
      "label": "Right padding",
      "min": 0,
      "max": 32,
      "step": 1,
      "unit": "px",
      "default": 0
    }
  ],
  "presets": [
    {
      "name": "Video",
      "category": "Media"
    }
  ]
}
{% endschema %}
