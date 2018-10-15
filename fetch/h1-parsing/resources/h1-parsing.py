def main(request, response):
    response.add_required_headers = False
    response.writer.write(request.GET.first("message"));
    response.close_connection = True
