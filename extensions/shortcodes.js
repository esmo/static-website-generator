function addShortcodes(env) {

env.addShortcode("breadcrumb", function (page) {
  // Split the path into segments
  const segments = page.filePathStem.split("/").filter(Boolean);
  // breadcrumbHtml = '<a href="/">Home</a>';
  breadcrumbHtml = '<ul class="breadcrumb">';

  // Generate HTML for each segment
  segments.forEach((segment, index) => {
    // Build the URL up to the current segment
    const href = "/" + segments.slice(0, index + 1).join("/") + "/";
    const name = segment
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "); // Replace dashes with spaces for readability
    // and makes first character uppercase

    // Only link segments that are not the last one
    if (segments.length > 1) {
      if (index < segments.length - 1) {
        breadcrumbHtml += `<li><a href="${href}">${name}</a></li>`;
      } else if (segments[segments.length - 1] !== "index") {
        // The current page
        breadcrumbHtml += `<li  class="active"><a href="#">${name}</a></li>`;
      }
    }
  });

  breadcrumbHtml += "</ul>";
  return breadcrumbHtml;
});
}

module.exports = { addShortcodes };
